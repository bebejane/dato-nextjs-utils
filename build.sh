packages=(
  hoc
  hooks
  components
  api
  utils
)

rm -rf ${packages[@]}
rm index.*
rm *.d.ts

echo Target cleared...

for package in "${packages[@]}"; do
  pnpm microbundle -i src/$package.ts -o $package/index.js --tsconfig 'tsconfig.json' --name ${package} --jsx React.createElement &
done

pnpm microbundle -i src/index.ts -o ./index.js --tsconfig 'tsconfig.json' --name index --jsx React.createElement

wait

echo Build complete!