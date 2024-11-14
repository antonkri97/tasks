import { describe, expect, test } from 'vitest'
import { add } from './main'

describe('main', () => {
  test('add', () => {
    expect(add(10, 10)).toBe(20);
  })
})