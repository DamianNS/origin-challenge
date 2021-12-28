import { CreditCardMaskPipePipe } from './credit-card-mask-pipe.pipe';

describe('CreditCardMaskPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardMaskPipePipe();
    expect(pipe).toBeTruthy();
  });
});
