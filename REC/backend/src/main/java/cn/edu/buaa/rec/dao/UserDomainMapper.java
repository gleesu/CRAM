package cn.edu.buaa.rec.dao;

import cn.edu.buaa.rec.model.UserDomain;
import cn.edu.buaa.rec.model.UserDomainExample;

public interface UserDomainMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user_domain
     *
     * @mbggenerated Tue Feb 27 16:57:55 CST 2018
     */
    int countByExample(UserDomainExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user_domain
     *
     * @mbggenerated Tue Feb 27 16:57:55 CST 2018
     */
    int insert(UserDomain record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user_domain
     *
     * @mbggenerated Tue Feb 27 16:57:55 CST 2018
     */
    int insertSelective(UserDomain record);
}