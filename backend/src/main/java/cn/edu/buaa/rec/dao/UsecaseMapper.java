package cn.edu.buaa.rec.dao;

import cn.edu.buaa.rec.model.UsecaseWithBLOBs;

import java.util.List;

public interface UsecaseMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table usecase
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    int insert(UsecaseWithBLOBs record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table usecase
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    int insertSelective(UsecaseWithBLOBs record);

    List<Long> selectUseCases(Long businessId);

    String selectRucmSpecByUseCase(Long useCaseId);
}