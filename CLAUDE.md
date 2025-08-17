# Claude Code Guidelines

## Project Overview
This is an Angular application. Follow Angular best practices and the existing project structure.

## Code Style Requirements
- Use TypeScript for all new files
- Follow Angular style guide
- Use reactive forms (FormGroup, FormControl)
- Implement proper error handling with try-catch blocks
- Use OnPush change detection for performance when possible
- Prefer composition over inheritance

## Component Guidelines
- Create components in feature modules
- Use standalone components when appropriate
- Implement proper lifecycle hooks (OnInit, OnDestroy)
- Use trackBy functions for *ngFor loops
- Implement proper accessibility attributes

## Service Guidelines
- Use dependency injection properly
- Implement error handling in HTTP services
- Use RxJS operators effectively (map, catchError, switchMap)
- Create proper TypeScript interfaces for API responses
- Use singleton services for shared state

## Testing Requirements
- Write unit tests for all new components and services
- Use TestBed for component testing
- Mock dependencies in tests
- Aim for meaningful test coverage
- Test both happy path and error scenarios

## File Structure
```
src/
├── app/
│   ├── shared/
│   │   ├── components/     # Shared components go here
│   │   ├── services/
│   │   └── models/
│   ├── features/
│   └── core/
```

## Naming Conventions
- Components: `my-component.component.ts`
- Services: `my-service.service.ts`
- Interfaces: `my-interface.interface.ts`
- Use kebab-case for file names
- Use PascalCase for class names
- Use camelCase for methods and properties

## Git Commit Guidelines
Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests

## PR Requirements
- Reference the issue number in PR description
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed
- Add proper commit messages
