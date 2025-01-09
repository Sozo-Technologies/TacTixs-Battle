# Contributing to the Repository

Thank you for your interest in contributing to this project! To make contributions smooth and organized, please follow these steps:

## 1. Fork the Repository
If you haven't already, fork this repository to your GitHub account.

## 2. Clone Your Fork
Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
cd REPOSITORY_NAME
```

## 3. Set Upstream Remote (if not set)
Add the original repository as an upstream remote to keep your fork updated:

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/REPOSITORY_NAME.git
```

## 4. Create a New Branch
Before starting work, create a new branch based on `dev-prod`:

```bash
git checkout dev-prod  # Make sure you're on the 'dev-prod' branch
git pull upstream dev-prod  # Fetch and merge latest changes from upstream
git checkout -b your-branch-name  # Create and switch to your new branch
```

## 5. Make Changes
Make the necessary changes or add new features in your branch. Ensure your changes are well tested and documented.

## 6. Stage Your Changes
Once you've made the changes, stage the files for commit:

```bash
git add .  # Add all modified files to the staging area
```

If you want to add specific files, replace `.` with the file paths.

## 7. Commit Your Changes
Commit your changes with a clear and concise message:

```bash
git commit -m "Your commit message describing the changes"
```

## 8. Fetch Updates from the Original Repository
Before pushing your changes, make sure to fetch the latest updates from the original repository:

```bash
git fetch upstream
```

## 9. Pull Latest Changes (if necessary)
If there are new updates in the original repository (upstream), merge them into your branch:

```bash
git checkout dev-prod  # Ensure you're on 'dev-prod' branch
git pull upstream dev-prod  # Pull the latest updates
git checkout your-branch-name  # Go back to your branch
git merge dev-prod  # Merge dev-prod into your branch
```

Resolve any merge conflicts if they occur.

## 10. Push Your Changes
Once your changes are committed and updated with the latest from `dev-prod`, push your branch to your GitHub repository:

```bash
git push origin your-branch-name
```

## 11. Create a Pull Request
Go to the repository on GitHub and create a pull request (PR) from your branch to the `dev-prod` branch.

Provide a detailed description of the changes you made and why they should be merged.

## 12. Review Process
Your PR will be reviewed by a project maintainer. If any changes are requested, please make them on your branch and push the updates to your remote repository.

Once approved, the pull request will be merged into `dev-prod`.

Thank you for contributing to this project!

 like to customize it further!
