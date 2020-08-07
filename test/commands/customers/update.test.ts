import {expect, test} from '@oclif/test'

describe('Customers:update', () => {
  test
  .stdout()
  .command(['Customers:update'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['Customers:update', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
