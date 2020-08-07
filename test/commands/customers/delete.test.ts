import {expect, test} from '@oclif/test'

describe('Customers:delete', () => {
  test
  .stdout()
  .command(['Customers:delete'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Customers:delete', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
