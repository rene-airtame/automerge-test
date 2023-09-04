import * as Automerge from '@automerge/automerge';

test('automerge', () => {
  const doc = Automerge.from({ foo: 'bar' });
  const newDoc = Automerge.change(doc, (doc) => {
    doc.foo = 'baz';
  });

  expect(newDoc.foo).toBe('baz');
});
