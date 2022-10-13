## lab-ds

Aplicação desenvolvida durante o Ignite Lab promovido pela Rocketseat
O objetivo da aplicação é desenvolver um design system com tecnologias modernas de UI/UX.

### Documentação

[Github pages](https://lgustta13.github.io/lab-ds/)

### Tecnologias utilizadas

[Figma](https://www.figma.com/file/Ub8FrtzwgyEtCrOKdcQbVy/Ignite-Lab-Design-System?node-id=5%3A63) - site com a finalidade de proporcionar ferramentas de design de interfaces

[ReactJS](https://pt-br.reactjs.org/) - biblioteca javascript para criar os componentes JSX da aplicação e rodas no browser

[Vite](https://vitejs.dev/guide/) - setup de build que fornece um servidor de desenvolvimento moderno com melhorias para módulos ES e processos de bundle mais otimizados quando o código vai para produção

```
yarn create vite
npm i
```

[Tailwindcss](https://tailwindcss.com/) - framework css que implementa classes prontas de estilização (Baixar sua extensão)
[PostCss](https://postcss.org/) - bundler para o css, automatiza tarefas dentro do css (-p para criar seu arquivo de configuração, baixar sua extensão)
Autoprefixer - Plugin do postcss que adiciona alguns prefixos do css (mox, webkit),

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

[Storybook](https://storybook.js.org/docs/react/get-started/introduction) - Biblioteca utilizada juntamente ao desenvolvimento do código para documentar os componentes, facilita a visualização dos componentes em todas as suas variações de forma documentada (vai criar uma pasta .storybook, baixar a extensão mdx, sempre que alguma informação de um arquivo.stories modificar as atualizações são feitas na documentação localhost)

```
npx sb init --builder @storybook/builder-vite --use-npm
npm run storybook
```

[clsx](https://www.npmjs.com/package/clsx) - pacote que permite aplicar classes em componentes de maneira condicional

```
npm install --save clsx
```

[radix-ui](https://www.radix-ui.com/) - biblioteca de componentes que fornece componentes de UI para a aplicação, utilizado para design systems (instalar o componente slot e checkbox)

```
npm install @radix-ui/react-slot @radix-ui/react-checkbox
```

[Slot](https://www.radix-ui.com/docs/primitives/utilities/slot) - pega as propriedades de um componente e repasa para o primeiro componente que vem com o children

[Phosphor](https://phosphoricons.com/) - biblioteca de ícones para utilizar com react

```
npm i phosphor-react
```

### Deploy da documentação

[Storybook deployer](https://github.com/storybookjs/storybook-deployer) - ferramenta que permite fazer deploy do storybook em serviços de hospedagem estáticos

```
npm i @storybook/storybook-deployer --save-dev
```

Adicionar o seguinte script no package.json para fazer deploy no GitHub Pages

```
"deploy-storybook": "storybook-to-ghpages"

```

Para gerar os arquivos estáticos de build

```
yarn build-storybook
```

[CI/CD](https://www.redhat.com/pt-br/topics/devops/what-is-ci-cd) - metodologia baseada em worflow de integração contínua. É utilizado para que toda vez quando enviar atualizações para o repositório do github, o github pages também será atualizado com a documentação do storybook (instalar o storybook-deployer e criar arquivo deploy-docs.yml)

[a11y](https://storybook.js.org/addons/@storybook/addon-a11y) - addon do sb utilizado para tornar os componentes UI mais acessíveis (Abre uma aba de acessibilidade no storybook)

```
npm install @storybook/addon-a11y
```

[Transform tool](https://transform.tools/) - Utilizado para converter um svg em componente React

### Processo de build e deploy

1. Com as configurações de deploy e build feitas (arquivo deploy-docs.yml e yarn build-storybook ou npm run build-storybook), dar um push do código para o repositório no github
2. No Github - Actions, verificar o workflow de build e deploy do storybook sendo realizada (Tudo automatizado por conta do arquivo deploy-docs.yml)
3. Assim que terminar, na etapa de deploy é possível ver a url do storybook
4. Observe a nova branch criada para ghpages, onde se encontra o conteúdo estático do sb
5. Em Settings - Pages - Deploy from a branch - Select branch - Save, para criar a documentação
6. No Github - Actions, verificar o workflow de deploy sendo feito pelo gerador de sites estáticos
7. Por fim, acessar o link para visualizar a documentação!
