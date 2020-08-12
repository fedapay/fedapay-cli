import {expect, test} from '@oclif/test'

describe('payouts:update', () => {
  test
  .stdout()
  .command(['payouts:update'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['payouts:update', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
