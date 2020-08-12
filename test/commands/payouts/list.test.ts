import {expect, test} from '@oclif/test'

describe('payouts:list', () => {
  test
  .stdout()
  .command(['payouts:list'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['payouts:list', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
