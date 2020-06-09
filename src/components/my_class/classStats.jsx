import React from "react";
import PieChart from "../common/pieChart";
import StatCard from "./statCard";
import Bar from "../common/bar";

const ClassStats = ({ stats }) => {
  return (
    <div
      id="statsCarouselIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner mb-5">
        <div className="card graphcard">
          <div className="carousel-item active branch mt-2">
            <div className="graph-head">
              <h3>Ratio of Branches</h3>
            </div>
            <PieChart data={stats["branch_ratio"]} is3D="true" />
          </div>
          <div className="carousel-item passing mt-2">
            <div className="graph-head">
              <h3>Ratio of Passing Year</h3>
            </div>
            <PieChart data={stats["passing_year_ratio"]} is3D="true" />
          </div>
          <div className="carousel-item passing mt-2">
            <div className="graph-head">
              <h3>Ratio of Gender</h3>
            </div>
            <PieChart data={stats["gender_ratio"]} is3D="true" />
          </div>
          <div className="carousel-item mt-2 statcards">
            <StatCard
              value={stats["total_completed_assignments"]}
              title="Total Completed Assignments"
            />
          </div>
          <div className="carousel-item mt-2 statcards">
            <StatCard
              value={stats["late_sub_percentage"] + "%"}
              title="Late Submission Percentage"
            />
          </div>
          <div className="carousel-item mt-2 statcards">
            <StatCard
              value={stats["number_of_colleges"]}
              title="Number of colleges"
            />
          </div>
          <div className="carousel-item mt-2" style={{ marginLeft: 20 }}>
            <div
              className="graph-head"
              style={{ marginBottom: 10, marginLeft: -20 }}
            >
              <h3>College Distribution</h3>
            </div>
            <Bar data={stats["college_ratio"]} title="College Distribution" />
          </div>
          <div className="carousel-item mt-2 statcards">
            <StatCard
              value={stats["batch_performance_index"]}
              title="Batch Performance Index"
            />
          </div>
          <div className="carousel-item mt-2 statcards">
            <StatCard value={stats["batch_rank"]} title="Batch Rank" />
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#statsCarouselIndicators"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-primary"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#statsCarouselIndicators"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-primary"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ClassStats;
