# React.JS

# React Hooks

- [x] useState
- [x] useEffect
- [x] useCallBack
- [x] useMemo
- [x] useRef
- [x] useContext
- [x] useReducer
- [x] useContext + useReducer

## useState

O useState nos permite criar estados em um componente criado a partir de uma **função**, assim como o state presente em componentes criados a partir de **classes**.

O useState() cria uma variável que controlará o estado do componente. Se quiser outra variável execute outro useState().

_Sintaxe_

```jsx
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button><!-- Com função de callback -->
    </>
  );
}
```

## useEffect

O Effect Hook (Hook de Efeito) te permite executar efeitos colaterais em componentes funcionais.

Existem dois tipos comuns de efeitos colaterais nos componentes React: aqueles que não precisam de limpeza, e aqueles que precisam. Vamos ver as suas diferenças mais detalhadamente

```jsx
const [counter, setCounter] = useState(0);
const [counter2, setCounter2] = useState(0);

useEffect(() => {
  console.log('componentDidUpdate - executa em toda atualização');
});

useEffect(() => {
  console.log('componentDidMount - executa 1 vez');
}, []);

useEffect(() => {
  console.log(
    'componentDidMount - executa toda vez que a dependêcnia mudar',
    counter,
  );
}, [counter]);
```

## useCallBack

O **useCallback** retorna um callback memoizado. O que isso significa?

A cada renderização do seu componente, todo o código que está nele é executado novamente. Portanto, as funções são re-declaradas, e uma nova referência (na memória) é alocada para cada função. O useCallback faz com que sua função seja redefinida apenas quando necessário, assim mantendo a mesma referência.

A diferenças das duas é que a **useCallback** não é executada no render enquanto a **useMemo** é.

No trecho abaixo a **useMemo** vai ser executada no primeiro render, enquanto a **useCallback só vai ser executada** se você a executar, como no **useEffect** que está comentado ou no click do button

O **array de dependências** é o responsável por definir se o callback será redefinido ou não. Caso haja uma mudança em alguma das dependências, será redefinido. Veja o exemplo abaixo:

```jsx
const [contador, setContador] = React.useState(0);

const callbackAtualizado = React.useCallback(() => {
  console.log('callbackAtualizado:', contador);
}, [contador]);

const callbackNaoAtualizado = React.useCallback(() => {
  console.log('callbackNaoAtualizado:', contador);
}, []);

function incrementar() {
  setContador(contador + 1);
}

return (
  <div>
    <p>contador: {contador}</p>
    <button onClick={incrementar}>Incrementar</button>
    <button onClick={callbackAtualizado}>callbackAtualizado</button>
    <button onClick={callbackNaoAtualizado}>callbackNaoAtualizado</button>
  </div>
);
```

** Existe um plugin do _ESLint_ chamado **eslint-plugin-react-hooks\*\* que possui uma regra para validar o array de dependências. Essa regra apontaria um problema no callbackNaoAtualizado:

## useMemo

O **useMemo** retorna um valor memoizado. Como isso se difere do useCallback?

1. O useMemo é executado durante a renderização. **Ele não é uma função a ser chamada, mas sim o retorno da função passada para o useMemo.**
2. Enquanto o useCallback é utilizado para manter a referência da função passada, o useMemo deve ser utilizado para cálculos caros, e não para guardar a referência de um objeto, por exemplo.

## useRef

- O **useRef** permite que você persista valores entre renderizações.
- Ele pode ser usado para armazenar um valor mutável que não causa uma nova renderização quando atualizado.
- Ele pode ser usado para acessar diretamente um elemento DOM.

Umas das aplicações para refs é para podermos acessar elementos DOM ou do React. Se passarmos um ref para um componente, o React configura propriedade .current do ref para o nó DOM correspondente sempre que esse nó for alterado

```jsx
export function TypeRef() {
  const countRef = useRef(null);
  const elementtRef = useRef(null);

  const [counter, setCounter] = useState(0);

  //Não temos loop infinito com useRef
  useEffect(() => {
    countRef.current = countRef.current + 1;

    console.log(countRef.current);
    console.log(elementtRef.current);
  });

  return (
    <div>
      <Header />

      <div>
        <h1>UseRef</h1>
        <p ref={elementtRef}>Referência</p>
        <p>contador: {counter}</p>

        <button
          onClick={() => {
            setCounter((preventCounter) => preventCounter + 1);
          }}
        >
          Teste
        </button>
      </div>
    </div>
  );
}
```

## useContext

- O **useContext** React facilita a criação de dados e estados acessíveis **globalmente**. O gancho useContext permite que você trabalhe com contextos de qualquer lugar e passe seus dados por todo o aplicativo.
- **UseContext** funciona como um consumir, ele assina as alterações do contexto e apenas tem acesso a leitura. Todo o componente que chama useContext será renderizado quando alguma informação do contexto for atualizada.

authProvider.js

```jsx
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: 'luis',
    theme: 'blue',
  });

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    const themeStorage = localStorage.getItem('theme');
    if (userStorage) {
      setUser({
        name: JSON.parse(userStorage),
        theme: JSON.parse(themeStorage),
      });
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => React.useContext(AuthContext);
```

typeContext.js (ps. equivalente ao index.js ou App.js)

```jsx
import { Header } from 'component/Header';
import React from 'react';
import { ComponentA } from './componentA';
import { ComponentB } from './componentB';

import { AuthProvider } from './context/auth';

import './style.css';

export function TypeContext() {
  //const { numero,setNumero } = useContext(GlobalContext);

  return (
    <div>
      <Header />

      <div>
        <h1>UseContext</h1>

        <AuthProvider>
          <ComponentA />
          <ComponentB />
        </AuthProvider>
      </div>
    </div>
  );
}
```

componentA.js

```jsx
import React from 'react';
import { useAuth } from '../context/auth';

export function ComponentA() {
  const { user, setUser } = useAuth();

  const handleName = (e) => {
    const name = e.target.value;
    setUser({ ...user, name });
    localStorage.setItem('user', JSON.stringify(name));
  };

  const handleTheme = (theme) => {
    setUser({ ...user, theme });
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  return (
    <div className={user.theme}>
      Componente A: {user.name}
      <br />
      <input type="text" onChange={handleName}></input>
      <hr />
      Alterar thema:
      <select
        onChange={(e) => {
          handleTheme(e.target.value);
        }}
        value={user.theme}
      >
        <option value="">selecione</option>
        <option value="body-black">black</option>
        <option value="body-white">white</option>
      </select>
    </div>
  );
}
```

componentB.js

```jsx
import React from 'react';
import { useAuth } from '../context/auth';

export function ComponentB() {
  const { user } = useAuth();

  return (
    <div className={user.theme}>
      <h3>ComponentB: {user.name}</h3>
    </div>
  );
}
```

style.css

```css
.body-black {
  background-color: #010101;
  color: #f0ece2;
}

.body-white {
  background-color: #e8ffff;
  color: #213e3b;
}
```

## useReduce

- **useReducer** é \*\*\*\*um dos Hooks adicionais que acompanham o React v16.8. Uma alternativa ao useStateHook, useReducerajuda você a gerenciar lógica de estado complexa em aplicativos React. Quando combinado com outros Hooks como useContext
- O useReducerHook é usado para armazenar e atualizar estados, assim como o useState. Ele aceita uma f**unção reducer** como seu primeiro parâmetro e o **estado** inicial como o segundo.
- useReducer retorna uma matriz que contém o valor do estado atual e uma **função dispatch** para a qual você pode passar uma ação e depois invocá-la. Embora isso seja semelhante ao padrão usado pelo Redux, existem algumas diferenças.

```css
const globalState = {
  title: 'O título',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('muda c/ payload: ', action.payload);
      return { ...state, title: 'Título Mudou' };
    case 'inverte':
      console.log('inverte');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    default:
      return { ...reducer };
  }
};

export function TypeReduce() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <Header />

      <div>
        <h1>UseReduce</h1>
        <p>
          Título: {title} | Contador: {counter}
        </p>
        <hr />
        <button
          onClick={() =>
            dispatch({
              type: 'muda',
              payload: new Date().toLocaleDateString('pt-BR'),
            })
          }
        >
          mudar título
        </button>
        <button onClick={() => dispatch({ type: 'inverte' })}>
          inverter título
        </button>
      </div>
    </div>
  );
}
```
