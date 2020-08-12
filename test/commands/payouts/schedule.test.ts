import {expect, test} from '@oclif/test'

describe('payouts:schedule', () => {
  test
  .stdout()
  .command(['payouts:schedule'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['payouts:schedule', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
