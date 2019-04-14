const onChangeReview = (data) => {
    return ({
        type: 'CHANGE_REVIEW',
        review: data,
    })
       
}

export default onChangeReview;