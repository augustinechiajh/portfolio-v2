# Personal Portfolio — augustinechiajh.github.io/portfolio-v2

Live site: https://augustinechiajh.github.io/portfolio-v2

## What is this?

A personal portfolio website I built from scratch to experiment with 
AI-assisted UI design and web development. The goal was to learn through experimentation.

## Why rebuild from scratch?

My previous portfolio was based on a Hugo template. It worked, but I 
found the boundaries of the template restrictive to building something 
I could actually be proud of. I decided to build one entirely from 
scratch instead, using Google Stitch to help me achieve my design goals.

## Tech stack

- React + TypeScript — I wanted to learn both, this project was the excuse
- Vite — recommended for fast prototyping and HMR (hot module reload), 
  which updates the browser instantly on save without rerunning the build
- Tailwind CSS — popular styling tool
- Framer Motion — scroll animations
- GitHub Actions — CI/CD pipeline that lints, builds, and deploys on 
  every push to main

## Spec-driven development

This project was my first experimentation with spec-driven development. The approach: 
define a CLAUDE.md spec file first, then use that as the single source 
of truth when building with Claude Code.

The spec lives at `.claude/CLAUDE.md`.

## Design

The design is anchored around a photo I shot in Sweden in 2021 during 
the NUS Overseas College programme. It is an image of the aurora borealis I witnessed for 
the first time. The color palette (aurora green #70FFAF, indigo-purple #9D7CD8, 
dark base #12131d) is extracted from that photo.

Google Stitch was used for initial design prototyping before any code 
was written. The DESIGN.md and code for the initial prototype was fed into Claude, to synthesise a CLAUDE.md spec file that was used in Claude Code for component development.