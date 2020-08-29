import {expect, test} from '@oclif/test'

describe('samples:create', () => {
  test
  .stdout()
  .command(['samples:create'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['samples:create', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
