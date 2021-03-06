package cn.edu.buaa.rec.model;

public class EvolutionUsecase {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column evolution_usecase.id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    private Long id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column evolution_usecase.usecase_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    private Long usecaseId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column evolution_usecase.question_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    private Long questionId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column evolution_usecase.solution_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    private Long solutionId;


    public EvolutionUsecase() {
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column evolution_usecase.id
     *
     * @return the value of evolution_usecase.id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public Long getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column evolution_usecase.id
     *
     * @param id the value for evolution_usecase.id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column evolution_usecase.usecase_id
     *
     * @return the value of evolution_usecase.usecase_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public Long getUsecaseId() {
        return usecaseId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column evolution_usecase.usecase_id
     *
     * @param usecaseId the value for evolution_usecase.usecase_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public void setUsecaseId(Long usecaseId) {
        this.usecaseId = usecaseId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column evolution_usecase.question_id
     *
     * @return the value of evolution_usecase.question_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public Long getQuestionId() {
        return questionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column evolution_usecase.question_id
     *
     * @param questionId the value for evolution_usecase.question_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column evolution_usecase.solution_id
     *
     * @return the value of evolution_usecase.solution_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public Long getSolutionId() {
        return solutionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column evolution_usecase.solution_id
     *
     * @param solutionId the value for evolution_usecase.solution_id
     *
     * @mbggenerated Mon Mar 05 22:34:37 CST 2018
     */
    public void setSolutionId(Long solutionId) {
        this.solutionId = solutionId;
    }
}