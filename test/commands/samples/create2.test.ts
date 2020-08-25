import {expect, test} from '@oclif/test'

describe('samples:create2', () => {
  test
  .stdout()
  .command(['samples:create2'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['samples:create2', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
