test('pruebas para Array.from', () => {
    expect(Array.from([1, 2, 3])).toStrictEqual([1, 2, 3])
    expect(Array.from([1, 2, 3], el => el * el)).toStrictEqual([1, 4, 9])
})

test('pruebas para Array.fill', () => {

    const arr = [1, 2, 3, 4, 5]

    expect(arr.fill(0, 2, 4)).toStrictEqual([1, 2, 0, 0, 5])// vemos que es cerrado por la izquierda y abierto por la derecha
    // expect().toStrictEqual([1, 4, 9])
})