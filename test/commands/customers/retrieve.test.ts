import {expect, test} from '@oclif/test'

describe('Customers:retrieve', () => {
  test
  .stdout()
  .command(['Customers:retrieve'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Customers:retrieve', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
