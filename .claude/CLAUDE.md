# Portfolio Site — Claude Code Instructions

## Project Overview
Personal portfolio site for Augustine, Cloud/DevOps Engineer.
Built with React + TypeScript + Tailwind CSS + Vite.
Deployed to GitHub Pages.

## Design Philosophy
Cinematic, editorial, technical but human. The aurora borealis photo 
shot in Sweden 2021 is the visual anchor of the entire site. 
Every design decision should feel like it belongs in the same universe 
as that photo.

## Color Palette
- Base background: #12131d (dark, not pure black — hint of warmth)
- Surface: #1a1b26 (slightly lighter for cards/sections)
- Primary accent: #70FFAF (aurora green — use for highlights, active states, key labels)
- Secondary accent: #9D7CD8 (indigo-purple — use sparingly for contrast)
- Primary text: #F8F8F2 (cream white)
- Secondary text: #bbcabd (muted, for body copy)

## Typography
- Headlines: Plus Jakarta Sans, font-bold, leading-none
- Body: Inter, font-light or font-normal, leading-relaxed
- Labels/tags: Plus Jakarta Sans, font-bold, tracking-widest, uppercase, text-xs
- Never use Space Grotesk (quirky g at large sizes)
- Never use system fonts

## Component Patterns
- Section labels: small green uppercase text above every section heading
- Section headings: text-4xl font-bold Plus Jakarta Sans
- No borders for section dividers — use background color shifts instead
- Cards: background #1a1b26, rounded-xl, no border
- Buttons primary: bg #70FFAF, text #00391f, rounded-full, font-bold
- Buttons secondary: border 1.5px #9D7CD8, text #9D7CD8, rounded-full, font-bold
- Pulsing dot indicator: animated ping in #70FFAF

## Responsive Design
- Mobile first — single column by default
- md: breakpoint for two column layouts
- px-12 horizontal padding on sections
- max-w-7xl mx-auto for content width

## File Structure
- src/components/ — one file per section (Hero, Nav, About, Work, etc.)
- src/assets/ — images including aurora.jpg
- Each component is a named function, default export

## Content Rules
- Copy must sound like Augustine, not AI
- No em dashes (flagged as AI language)
- No vague claims — every achievement must be specific and defensible
- re:Invent: work was "presented at" not "featured by" Augustine personally
- Security Lake: 3,000+ accounts, 6 regions, 47% cost reduction — these are verified

## Sections (in order)
1. Nav — fixed, backdrop blur, links: Work, Skills, About, Contact
2. Hero — full screen aurora photo, gradient overlays, headline, subtext, 2 CTAs
3. About — two column, story left, quick facts right
4. Work — cards for projects (Security Lake, Infra Provisioner, This Site)
5. Certifications — clean grid of cert badges
6. Contact — simple, warm
7. Footer — minimal

## Nav Mobile Behaviour
- On mobile: hide nav links, show hamburger menu icon (three lines)
- On hamburger click: dropdown menu appears showing all nav links vertically
- Links: Work, Skills, About, Certs
- Close menu when a link is clicked
- Hamburger icon color: #F8F8F2

## Work Section Spec

### Card 1 — AWS Security Lake
- Title: AWS Central Logging Using Amazon Security Lake
- Tag: Cloud Infrastructure
- Description: Deployed a central logging service using Terraform across 
  3 AWS Organizations, 6 global regions, and 3,000+ accounts. Led engineering 
  of self-service log access automations enabling teams to query data via 
  one-click CloudFormation templates. Resulted in 47% infrastructure cost 
  reduction vs previous custom setup.
- Tags: Terraform, AWS, CI/CD, Security
- Note: Work was presented at AWS re:Invent 2025 (SEC347)

### Card 2 — Infra Provisioner Mockup
- Title: Self-Service Infrastructure Provisioner
- Tag: Developer Experience
- Description: Built a personal project to make developers' lives easier — 
  instead of knowing which Terraform modules to use, developers call an API 
  with their specifications and compliant Terraform modules 
  automatically provisions the infrastructure for them.
- Tags: Terraform, Python, API, Developer Experience
- Link: https://github.com/augustinechiajh/infra-provisioner-mockup

### Card 3 — This Portfolio Site
- Title: Portfolio Site Revamp
- Tag: Learning by Experimentation
- Description: Rebuilt my portfolio to experience AI-assisted 
  development first hand — using Google Stitch for design prototyping, 
  Claude Code with spec-driven development, and React + TypeScript replacing 
  a previous Hugo template.
- Tags: React, TypeScript, Tailwind CSS, Google Stitch, Claude Code
- Link: https://github.com/augustinechiajh/portfolio-v2

## Certifications Section Spec
- Section label: Certifications
- Section heading: Credentials that back the work.
- Layout: 3 column grid on desktop, 2 column on mobile
- Each card is horizontal within the grid cell: cert badge icon left (~80px), details right
- Details: cert name (bold), issuing body, validity period, short one-line description
- Verify link at bottom of each card

### Certs (in order)
1. AWS Certified DevOps Engineer - Professional | AWS | Nov 2025 | https://www.credly.com/badges/c4203b0a-6ffa-4836-a879-2771e1c409dd
2. AWS Certified Solutions Architect - Professional | AWS | Aug 2025 | https://www.credly.com/badges/f927ea8a-f173-462f-b24d-9df326d6e2da
3. HashiCorp Certified: Terraform Associate (003) | HashiCorp | Mar 2025 | https://www.credly.com/badges/a41a3731-355d-4180-8a32-66e7602818a3

## Footer Spec
- Minimal, clean
- Left: "Augustine" name in cream white
- Center: copyright "© 2026 Augustine Chia"
- Right: LinkedIn and GitHub icon links
- LinkedIn: https://linkedin.com/in/augustine-chia
- GitHub: https://github.com/augustinechiajh
- No "Open to opportunities" or any job-seeking language
- Background: #12131d, subtle top border rgba(255,255,255,0.08)

## What Not To Do
- No percentage skill bars (look arbitrary and dated)
- No pure black backgrounds
- No neon colors
- No generic SaaS copy
- No borders between sections
- Don't claim I built everything solo when teams were involved

## Skills
Use the frontend-design skill for all UI component development.
See .claude/skills/frontend-design/SKILL.md

## Deployment
- Platform: GitHub pages
- Method: GitHub Actions on push to main
- Build command: npm run build
- Output directory: dist
- Node version: 20
- Base URL: /portfolio-v2/