import {expect, test} from '@oclif/test'

describe('transactions:token', () => {
  test
  .stdout()
  .command(['transactions:token'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['transactions:token', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
