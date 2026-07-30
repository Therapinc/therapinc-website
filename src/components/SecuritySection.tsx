import React from 'react';
import { Lock, User, Shield, CheckCircle } from 'lucide-react';

const securityFeatures = [
  { icon: Lock, label: 'Data encryption' },
  { icon: User, label: 'Role-based access' },
  { icon: Shield, label: 'Regular backups' },
  { icon: CheckCircle, label: 'Compliance-ready' },
];

export default function SecuritySection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto w-full px-[var(--spacing-md)] lg:px-[var(--spacing-lg)]" style={{ maxWidth: '1550px' }}>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8">

          {/* Left Column: Content */}
          <div className="flex flex-col justify-center xl:max-w-[768px]">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 shrink-0 rounded-full bg-amber-500"></div>
              <h2 className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Security & Compliance
              </h2>
            </div>

            <h3 className="mb-6 font-heading text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Sensitive records deserve serious protection.
            </h3>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Student and therapy data is sensitive by nature. Therapinc is built with encrypted storage, role-based access, and audit trails — so only the right people see the right records.
            </p>

            <div className="rounded-r-lg border-l-4 border-amber-500 bg-gray-50 p-5 shadow-sm">
              <p className="text-sm leading-relaxed text-gray-600">
                Once you confirm which regional standards apply (FERPA, HIPAA, GDPR, or local education-data rules), this section can be tailored with exact certifications.
              </p>
            </div>
          </div>

          {/* Right Column: Feature Cards Grid */}
          <div className="flex w-full items-center justify-center lg:justify-end">
            <div className="grid w-full max-w-[600px] grid-cols-1 gap-4 sm:grid-cols-2">
              {securityFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <Icon className="h-5 w-5 text-[var(--color-secondary)]" />
                    <span className="font-heading text-sm font-bold text-gray-900">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
