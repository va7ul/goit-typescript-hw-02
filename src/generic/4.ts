/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Test {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Test> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
