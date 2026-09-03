# Minatoi development and deployment

The local repository is the only place where source files should be edited.

## Development flow

1. Make changes locally on `theme/solace`.
2. Run the storefront production build locally.
3. Review the changes and create a Git commit.
4. Push the commit to `origin/theme/solace`.
5. Deploy the exact GitHub commit on the server.

## Local verification

```bash
cd apps/storefront
pnpm install --frozen-lockfile
pnpm build
```

## Push

```bash
git push origin theme/solace
```

## Server deployment

Run from the project root on the Ubuntu server:

```bash
sudo ./scripts/deploy-storefront.sh
```

The deploy script stops if the server has uncommitted files or if Git cannot
fast-forward to the GitHub branch. It restarts the storefront only after a
successful production build.
