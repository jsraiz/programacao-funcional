# Programação funcional com JavaScript

## Outro paradigmas

### Imperativo/Procedural

- Você diz o "Como" que deve ser executado
- Instruções detalhadas para o programa
- Alterando direto o estado do programa
- Statements

### Orientação a objetos
- Instruções encapsuladas em métodos
- Representação do sistema mais perto do mundo real (Casa, Humano, Animal)
- Reutilização e organização de código melhor

### Reativo
- Fluxo de dados
- Muito favorável ao mundo assíncrono
- Push-based

### Funcional
> Em ciência da computação, programação funcional é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis. Ela enfatiza a aplicação de funções, em contraste da programação imperativa, que enfatiza mudanças no estado do programa.

- Baseada em funções

Porque a matemática?

```
f(x) = 3x²+5
```

```js
function f(x) {
  return (3*(Math.pow(2))) + 5
}
```
- Não existe statements
- Sempre vai ter uma entrada (input) gerando uma saída (output)
- Não altera nada do lado de fora


## Motivos para usar


### Previsível/Predictable

Exemplo com loop for e map (provando a previsibilidade)

```js
  const nomesMaiusculos = [];
  const nomesMinusculos = ['ayrton', 'jesus', 'teshima'];

  for (let i = 0; i < nomesMinusculos.length-1; i++) {
    nomesMaiusculos.push(nomesMinusculos[i].toUpperCase())
  }

  console.log(nomesMaiusculos)
```

```js
  const nomesMaiusculos = nomesMinusculos.map(function(nome) {
    return nome.toUpperCase();
  })
```

- Sua função sempre vai retornar um valor
- Ela depende apenas dos valores que você passa para ela (previsível, transparente)

### Confiável
- Você tem que confiar no seu código e não apenas ele funcionar
- Você tem que entender o código e não apenas funcionar

### Seguro
- Valores imutáveis


### Comunicação
- A maior parte do tempo o desenvolvedor passa lendo/dando manutenção em código
- Fazer códigos que são fáceis de ler!


## Premisas

- Pura (pure functions) -> Sem efeito colateral
- Declarativas
- Imutável 

## Funções != procedures

### Procedures
Nem sempre vai ter uma entrada; nem sempre vai ter uma saída;
Vários statements

### Função
Sempre vai ter uma entrada; Sempre vai ter uma saída;
O conteúdo da função é uma expressão que vai ser avaliada, que vai resultar na saída.
Não vai ter alteração de algum valor fora dela.
E ela nunca vai retornar o mesmo valor que recebeu


## Explorando funções

### HOF






