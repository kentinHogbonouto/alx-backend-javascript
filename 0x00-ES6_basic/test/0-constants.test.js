import { taskFirst, getLast, taskNext } from "../0-constants";

test('First task', () => {
    expect(taskFirst()).toBe("I prefer const when I can.");
});

test('get last', () => {
    expect(getLast()).toBe("is okay");
});

test('Next task', () => {
    expect(taskNext()).toBe("But sometimes letis okay");
});
