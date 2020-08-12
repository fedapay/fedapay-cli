import {expect, test} from '@oclif/test'

describe('payouts:create', () => {
  test
  .stdout()
  .command(['payouts:create'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['payouts:create', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
