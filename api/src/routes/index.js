import v1 from './v1'






export default app => {
    app.use('/api/v1', v1);
    app.get('/healthz', (req, res) => res.send({ message: 'success' }));
}