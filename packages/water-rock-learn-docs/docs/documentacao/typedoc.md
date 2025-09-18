---
sidebar_position: 1
---

# TypeDoc

O [TypeDoc](https://typedoc.org/index.html) é utilizado para criar uma documentação do código com HTML.

## Comandos
Para gerar a documentação com o TypeDoc pasta executar:
```Bash
pnpm typedoc
```

## Como documentar
Para documentar foi necessário usar comentários de multiplas linhas acima do código e usar as **tags** indicadas pelo TypeDoc, observe o exemplo:
```TS
/**
 * Classe principal da calculadora que implementa operações matemáticas básicas
 * 
 * @example
 * ```typescript
 * const calc = new Calculator();
 * const result = calc.add(5, 3); // retorna 8
 * ```
 */
export class Calculator implements ICalculator {
  /**
   * Soma dois números
   * @param a - Primeiro número
   * @param b - Segundo número  
   * @returns A soma dos dois números
   * 
   * @example
   * ```typescript
   * const calc = new Calculator();
   * calc.add(2, 3); // retorna 5
   * ```
   */
  add(a: number, b: number): number {
    return this.performOperation(a, b, 'add');
  }
}
```
## Configurações

As configurações do TypeDoc estão definidas em **typedoc.json**