import app from './app';

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')} 포트 대기중`)
})