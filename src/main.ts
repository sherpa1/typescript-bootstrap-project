function hello_world(): string {
    return 'Hello, World !';
}

function main(): void {
    const result: string = hello_world();
    console.log(result);
}

main();

export default hello_world;