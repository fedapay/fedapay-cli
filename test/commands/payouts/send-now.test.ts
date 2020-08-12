import {expect, test} from '@oclif/test'

describe('payouts:send-now', () => {
  test
  .stdout()
  .command(['payouts:send-now'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['payouts:send-now', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
