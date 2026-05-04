# Database: MySQL 8.0 (Marketing Website)

## Instance Details

**Type:** MySQL 8.0  
**Managed by:** AWS RDS (Multi-AZ, automated backups, 30-day retention)  
**Region:** [Configured in Terraform / CloudFormation]  
**Purpose:** Stores trial signups, user attribution data, and college partnership metadata for the marketing website.

## Connection

**Environment variable:** `DATABASE_URL`  
(Format: `mysql://user:password@host:3306/nichelearner_marketing`)

**Managed by:** AWS Secrets Manager — credentials are rotated and never committed to code.

## Migration & Versioning

**Migration tool:** golang-migrate  
**Location:** `backend/db/migrations/` (numbered SQL files, e.g., `001_create_signups.up.sql`)  
**Execution:** Migrations run before backend deployment via CI/CD pipeline (GitHub Actions → deploy script).

## Conventions

- **Table names:** snake_case (e.g., `signups`, `signup_sources`, `colleges`)
- **Column names:** snake_case (e.g., `user_type`, `created_at`)
- **Primary key:** `id` (BIGINT AUTO_INCREMENT) on every table
- **Timestamps:** `created_at` and `updated_at` (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
- **Soft deletes:** Not used (rows are deleted when trials expire; hard delete acceptable for this module)
- **Indexing:** Indexes on foreign keys and high-cardinality query fields (email, referral_code)

## Database Name

`nichelearner_marketing` (or configured via Terraform)

## Key Relationships

- **signups** → **signup_sources** (1:N) — each signup can have multiple source attributions
- **signups** ↔ **colleges** (via signup_sources) — college-referred signups are tracked through signup_sources.source_identifier
