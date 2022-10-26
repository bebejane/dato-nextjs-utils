packages=(
  hoc
  hooks
  components
  api
  index
)

rm -rf ${packages[@]}

echo Target cleared...

for package in "${packages[@]}"; do
  pnpm microbundle -i src/$package.ts -o $package/index.js --tsconfig 'tsconfig.json' --name ${package} &
done

wait

echo Build complete!