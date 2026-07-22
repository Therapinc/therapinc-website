.PHONY: setup dev build start lint format test type-check clean help

# Default target
.DEFAULT_GOAL := help

help:
	@echo "Therapinc Website Makefile Commands:"
	@echo "  make setup       Install dependencies and setup git hooks"
	@echo "  make dev         Run Next.js development server"
	@echo "  make build       Build production Next.js application"
	@echo "  make start       Start production server"
	@echo "  make lint        Run ESLint checks"
	@echo "  make format      Format codebase with Prettier"
	@echo "  make test        Run unit & smoke tests with Vitest"
	@echo "  make type-check  Run TypeScript compiler type check"

setup:
	npm run setup

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

format:
	npm run format

test:
	npm run test

type-check:
	npm run type-check

clean:
	rm -rf .next node_modules coverage
