# AGENTS.md

## Project
Todo App (PWA)

## Goal
Build a simple installable progressive web app for managing todo tasks.

## MVP features
- Add todo
- Mark todo as completed
- Delete todo
- Save todos locally
- Work offline after initial load
- Installable as a PWA

## Suggested stack
- React + Vite
- TypeScript
- Simple CSS
- localStorage for persistence
- Manifest + service worker for PWA basics

## Technical guidelines
- Keep implementation simple
- Use localStorage for MVP
- Keep UI mobile-friendly
- Avoid unnecessary dependencies
- Keep diffs small and focused
- Do not refactor unrelated code

## Definition of done
- App starts successfully
- User can add, complete, and delete tasks
- Tasks remain after refresh
- PWA basics work
- Summary includes changed files and validation results

## Risks to check
- Empty input handling
- Duplicate task handling
- localStorage read/write issues
- Offline cache issues
- UI usability on mobile