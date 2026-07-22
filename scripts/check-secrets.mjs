import { execSync } from 'child_process';

const SECRET_PATTERNS = [
  { name: 'Resend API Key', regex: /re_[a-zA-Z0-9_]{20,}/g },
  { name: 'OpenAI API Key', regex: /sk-proj-[a-zA-Z0-9]{20,}/g },
  { name: 'Generic Secret Key', regex: /(?:api_key|secret_key|private_key)\s*=\s*['"][a-zA-Z0-9_-]{16,}['"]/gi },
  { name: 'Database Connection URI', regex: /postgres(?:ql)?:\/\/[^:\s]+:[^@\s]+@[^\s]+/gi },
];

const FORBIDDEN_FILES = ['.env', '.env.local', '.env.production', '.env.staging'];

function runSecretScan() {
  console.log('🔒 Running pre-commit secret scanning guard...');

  let stagedFiles = [];
  try {
    const output = execSync('git diff --cached --name-only', { encoding: 'utf8' });
    stagedFiles = output.split('\n').filter(Boolean);
  } catch {
    // If not in a git repo or no git binary, skip gracefully
    return;
  }

  let violations = [];

  for (const file of stagedFiles) {
    // 1. Guard against staging sensitive .env files
    if (FORBIDDEN_FILES.some((forbidden) => file.endsWith(forbidden))) {
      violations.push(`[CRITICAL] Sensitive environment file staged for commit: ${file}`);
      continue;
    }

    // 2. Scan staged content for secret key patterns
    try {
      const content = execSync(`git show :${file}`, { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });
      for (const pattern of SECRET_PATTERNS) {
        if (pattern.regex.test(content)) {
          violations.push(`[SECRET DETECTED] File "${file}" contains a pattern matching ${pattern.name}`);
        }
      }
    } catch {
      // File might be deleted or binary, ignore
    }
  }

  if (violations.length > 0) {
    console.error('\n❌ PRE-COMMIT GUARD FAILED: Potential secrets detected in commit!\n');
    violations.forEach((v) => console.error(`  - ${v}`));
    console.error('\nPlease remove sensitive credentials before committing.\n');
    process.exit(1);
  }

  console.log('✅ Secret scanning passed.');
}

runSecretScan();
