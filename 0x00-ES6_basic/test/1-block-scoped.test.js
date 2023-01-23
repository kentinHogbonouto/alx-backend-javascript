import taskBlock from "../1-block-scoped";

test('task block with true condition', () => {
    expect(taskBlock(true)).toStrictEqual([false, true]);
});

test('task block with false condition', () => {
    expect(taskBlock(false)).toStrictEqual([false, true]);
});
