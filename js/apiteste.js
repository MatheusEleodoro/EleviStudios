function teste(request, response)
{
    const date = new Date();
    response.json({
        date : date
    })
}
export default teste;