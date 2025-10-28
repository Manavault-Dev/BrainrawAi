# 🤝 Contributing to Brainrow

Thank you for your interest in contributing to Brainraw! We're excited to have you on board.

---

## 🎯 Goal

We aim to create an open, collaborative environment where contributors can build amazing features together. Clear communication and structured workflows help us all move faster.

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** v20+ installed
- **npm** v10+ installed
- A basic understanding of TypeScript, React, and Express
- Git installed and configured

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/Manavault-Dev/BrainrawAi.git
   cd BrainrawAi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**

   Create `apps/backend/.env`:
   ```env
   PORT=4000
   OPENAI_API_KEY=your_key_here
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This runs:
   - Frontend on http://localhost:3000
   - Backend on http://localhost:4000

5. **Verify everything works**
   - Open http://localhost:3000 in your browser
   - Check that both servers are running without errors

---

## 📝 Coding Standards

### TypeScript

- Use **strict mode** — enable all recommended TypeScript options
- Prefer **interfaces** over types for object shapes
- Add **JSDoc comments** for public functions
- Use **explicit return types** for exported functions

```typescript
/**
 * Generates a storyboard from a text prompt.
 * @param prompt - User's storyboard request
 * @returns Promise resolving to a Storyboard object
 */
export async function generateStoryboard(prompt: string): Promise<Storyboard> {
  // Implementation
}
```

### Code Formatting

We use **Prettier** for consistent code formatting.

Run before committing:
```bash
npm run format
```

Configure your editor to format on save using our `.prettierrc` settings.

### File Structure

- **Components**: Co-locate with usage or in dedicated `components/` directories
- **Utilities**: Place in `utils/` or `lib/` directories
- **Types**: Use the shared `packages/types` package
- **Services**: Keep API/third-party integrations in `services/`

---

## 🌿 Branch Strategy

We follow Git Flow:

```
main (production-ready)
  └── dev (integration branch)
       └── feature/* (your feature branches)
```

### Naming Conventions

- **Features**: `feature/description-of-feature`
- **Bug fixes**: `fix/description-of-bug`
- **Documentation**: `docs/topic`
- **Refactoring**: `refactor/description`
- **Hotfixes**: `hotfix/description` (merge to both main and dev)

### Creating a Feature Branch

```bash
# Always start from dev
git checkout dev
git pull origin dev
git checkout -b feature/my-awesome-feature

# Make your changes...

# Push and create PR
git push origin feature/my-awesome-feature
```

---

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows our TypeScript/React conventions
- [ ] Tests pass locally (`npm test` - if we add tests)
- [ ] Code is formatted with Prettier
- [ ] No console.logs or debug code left behind
- [ ] Documentation updated if needed

### PR Checklist

When creating a pull request, please include:

1. **Clear description** of what the PR does
2. **Issue number** (if applicable)
3. **Screenshots/videos** for UI changes
4. **Testing notes** — how did you verify it works?

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings introduced
```

### Review Process

1. At least **one maintainer** must approve
2. All CI checks must pass
3. Address any review comments
4. Once approved, maintainers will merge

---

## 💬 Communication

### Before Making Large Changes

- **Open an issue** first for discussion
- Use GitHub **Discussions** for design questions
- Tag maintainers with `@manavault/team` for urgent matters

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add storyboard export to video
fix: resolve canvas rendering issue on mobile
docs: update API documentation
refactor: simplify OpenAI service code
chore: update dependencies
```

Format: `<type>: <subject>`

---

## 🐛 Reporting Bugs

Found a bug? Create an issue with:

1. **Description** — What went wrong?
2. **Steps to reproduce**
3. **Expected behavior** — What should happen?
4. **Actual behavior** — What actually happened?
5. **Screenshots** (if applicable)
6. **Environment** — OS, Node version, browser

---

## ✨ Feature Requests

Have an idea? We'd love to hear it!

Use the **Feature Request** issue template and include:
- Use case description
- Proposed solution (if you have one)
- Alternative approaches you considered

---

## 🎉 Recognition

Contributors will be:
- Listed in our README
- Mentioned in release notes
- Celebrated in our community

---

## 📞 Questions?

- Open a GitHub **Discussion**
- Create an issue with the `question` label
- Tag `@manavault/team` for direct help

---

**Thank you for contributing to Brainrow! 🙏**

