# Security Policy

## Supported versions

This repository is maintained on the `main` branch only.

## Reporting a vulnerability

Please do not open a public issue for sensitive vulnerabilities.

1. Open a private security advisory in GitHub for this repository.
2. Include reproduction details, impacted files, and suggested mitigation.
3. Expect an initial response within 7 days.

## Automated security checks

GitHub Actions runs:

- `npm audit --audit-level=high` on dependency/workflow changes and weekly schedule
- Gitleaks secret scanning
- Dependency Review on pull requests
- CodeQL analysis for JavaScript/TypeScript

## Local security checks

Run these commands before opening PRs:

```bash
npm ci --ignore-scripts
npm audit --audit-level=high
npm test
```

## Repository settings to enable

Enable these settings in GitHub repository settings:

1. Branch protection on `main`:
   - Require pull request before merging
   - Require status checks to pass
   - Require branches to be up to date
2. Secret scanning and push protection (GitHub Advanced Security if available).
3. Dependabot security updates.
