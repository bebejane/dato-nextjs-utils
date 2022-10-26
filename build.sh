packages=(
  hoc
  hooks
  components
  api
)

rm -rf ${packages[@]}

echo Target cleared...

for package in "${packages[@]}"; do
  pnpm microbundle -i src/$package.ts -o $package/index.js --tsconfig 'tsconfig.json' --name ${package} &
done

pnpm microbundle -i src/index.ts -o ./index.js --tsconfig 'tsconfig.json' --name index

wait

echo Build complete!