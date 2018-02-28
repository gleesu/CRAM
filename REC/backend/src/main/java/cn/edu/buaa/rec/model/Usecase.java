package cn.edu.buaa.rec.model;

import java.util.Date;

public class Usecase {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column usecase.id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Long id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column usecase.name
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private String name;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column usecase.build_time
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Date buildTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column usecase.update_time
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Date updateTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column usecase.creator_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Long creatorId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column usecase.detection_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Long detectionId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column usecase.usestate
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private String usestate;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column usecase.id
     *
     * @return the value of usecase.id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Long getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column usecase.id
     *
     * @param id the value for usecase.id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column usecase.name
     *
     * @return the value of usecase.name
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column usecase.name
     *
     * @param name the value for usecase.name
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column usecase.build_time
     *
     * @return the value of usecase.build_time
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Date getBuildTime() {
        return buildTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column usecase.build_time
     *
     * @param buildTime the value for usecase.build_time
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setBuildTime(Date buildTime) {
        this.buildTime = buildTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column usecase.update_time
     *
     * @return the value of usecase.update_time
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column usecase.update_time
     *
     * @param updateTime the value for usecase.update_time
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column usecase.creator_id
     *
     * @return the value of usecase.creator_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Long getCreatorId() {
        return creatorId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column usecase.creator_id
     *
     * @param creatorId the value for usecase.creator_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column usecase.detection_id
     *
     * @return the value of usecase.detection_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Long getDetectionId() {
        return detectionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column usecase.detection_id
     *
     * @param detectionId the value for usecase.detection_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setDetectionId(Long detectionId) {
        this.detectionId = detectionId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column usecase.usestate
     *
     * @return the value of usecase.usestate
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public String getUsestate() {
        return usestate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column usecase.usestate
     *
     * @param usestate the value for usecase.usestate
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setUsestate(String usestate) {
        this.usestate = usestate == null ? null : usestate.trim();
    }
}