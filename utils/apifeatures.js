class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    pagination(resultPerPage){
        const currPage=Number(this.queryStr.page)||1;
        const skip=resultPerPage*(currPage-1);
        this.query=this.query.limit(resultPerPage).skip(skip);
        return this;
    }
};
module.exports=ApiFeatures;