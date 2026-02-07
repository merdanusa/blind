# Buggy Next.js App - Interview Practice

A Next.js TypeScript application with **Tailwind CSS** intentionally filled with 87+ bugs for frontend developer interview practice. Perfect for live coding sessions and debugging exercises.

## 🎯 Purpose

Train middle-level frontend developers on:
- Debugging React applications
- Identifying TypeScript issues
- Finding performance problems
- Spotting memory leaks
- Understanding Next.js best practices
- Tailwind CSS usage

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📋 What to Look For

### Critical Issues
- Infinite loops
- Type mismatches
- Null/undefined errors
- Memory leaks

### Functionality Issues
- Broken features
- Missing event handlers
- Wrong API implementations
- Search not working

### Performance Issues
- Unnecessary re-renders
- Missing optimizations
- Not using React.memo
- Wrong hook dependencies

### Best Practices
- Missing key props
- Using index as key
- Not using Next.js Link
- Missing error handling
- No form validation

## 🔍 How to Use

### For Interviewers
1. Give 30-45 minutes to find bugs
2. Ask candidate to prioritize fixes
3. Watch them fix critical bugs
4. Discuss their approach

### For Candidates
1. Read through all files first
2. Identify critical bugs (crashes)
3. Fix functionality issues
4. Optimize performance
5. Improve code quality

## 📁 File Structure

```
app/
├── layout.tsx         # Layout bugs
├── page.tsx          # Home page bugs
├── about/
│   └── page.tsx      # Performance bugs
├── users/
│   └── page.tsx      # Async/data fetching bugs
└── api/
    └── data/
        └── route.ts  # API bugs
```

## 🎓 Bug Categories

- **React Hooks** - Dependencies, cleanup, infinite loops
- **TypeScript** - Type mismatches, missing types
- **Performance** - Re-renders, memory leaks
- **Next.js** - Routing, Links, metadata
- **Tailwind CSS** - Proper usage and styling
- **Best Practices** - Keys, validation, error handling

## ✅ Success Criteria

Good performance if candidate can:
1. Identify 50%+ of bugs in 30 minutes
2. Fix critical bugs first
3. Explain why bugs are problematic
4. Suggest better patterns
5. Demonstrate React/TypeScript knowledge

## ⚠️ Note

This app is intentionally broken! Do NOT use any code from here in production.

## 🛠️ Tech Stack

- Next.js 14
- TypeScript 5
- Tailwind CSS 3
- React 18

Good luck debugging! 🐛
