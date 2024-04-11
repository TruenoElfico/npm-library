type sayHelloProps = {
    firstName: string;
    lastName?: string;
    age?: number;
};

declare function sayHello({ firstName, lastName, age }: sayHelloProps): void;

export { sayHello, type sayHelloProps };
