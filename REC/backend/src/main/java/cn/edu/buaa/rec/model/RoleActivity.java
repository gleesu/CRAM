package cn.edu.buaa.rec.model;

public class RoleActivity {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column role_activity.id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Long id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column role_activity.role_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Long roleId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column role_activity.activity
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    private Long activity;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column role_activity.id
     *
     * @return the value of role_activity.id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Long getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column role_activity.id
     *
     * @param id the value for role_activity.id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column role_activity.role_id
     *
     * @return the value of role_activity.role_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Long getRoleId() {
        return roleId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column role_activity.role_id
     *
     * @param roleId the value for role_activity.role_id
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column role_activity.activity
     *
     * @return the value of role_activity.activity
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public Long getActivity() {
        return activity;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column role_activity.activity
     *
     * @param activity the value for role_activity.activity
     *
     * @mbggenerated Wed Feb 28 00:40:34 CST 2018
     */
    public void setActivity(Long activity) {
        this.activity = activity;
    }
}