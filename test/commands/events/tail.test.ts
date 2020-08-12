import {expect, test} from '@oclif/test'

describe('events:tail', () => {
  test
  .stdout()
  .command(['events:tail'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['events:tail', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
