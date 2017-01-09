export default async ctx => {
  ctx.locals.message = function(msg, type = 'info') {
    let sess = ctx.session;
    sess.messages = sess.messages || [];
    sess.messages.push({ type: type, string: msg });
  }
  ctx.locals.error = function(msg) {
    return ctx.res.message(msg, 'error');
  }
}