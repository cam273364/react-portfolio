import React from 'react';
import ideation from './ideation.jpg'
import pokedex from './pokedex.jpg'
import nutricipe from './nutricipe.jpg'
import noteTaker from './note-taker.jpg'
import lessonEase from './lesson-ease.jpg'

function Portfolio() {

    const projects = [
        { 
          deployedUrl: 'https://ideation-app-generator.herokuapp.com/',
          githubRepo:    'https://github.com/cam273364/app-idea-generator',
          screenshot: ideation,
          name: "ideation"
        },
        {
          deployedUrl: 'https://cam273364.github.io/PokemonAPI/',
          githubRepo: 'https://github.com/cam273364/PokemonAPI',
          screenshot: pokedex,
          name: "pokedex"
        },
        {
          deployedUrl: 'https://laceya25.github.io/Nutricipe/',
          githubRepo: 'https://github.com/cam273364/Nutricipe',
          screenshot: nutricipe,
          name: "nutricipe"
        },
        {
            deployedUrl: 'https://sleepy-lake-94087.herokuapp.com/',
            githubRepo: 'https://github.com/cam273364/note-taker-app',
            screenshot: noteTaker,
            name: "note-taker"
        },
        { 
            deployedUrl: 'https://lesson-ease-client.herokuapp.com/',
            githubRepo:    'https://github.com/cam273364/lesson-ease-react',
            screenshot: lessonEase,
            name: "lesson-ease"
          },
    ]

    return (
        <div class="d-flex flex-wrap">
            {
                projects.map(project => {
                    return (
                        <div class="col-6 p-2">
                            <div class="row">
                                <a href={project.deployedUrl} target="_blank" class="mr-2">{project.name}</a>
                                <a href={project.githubRepo} target="_blank">Github Repository</a>
                            </div>
                            <img src={project.screenshot} class="w-100"/>
                        </div>
                    )
                })
            }



        </div>
    )
    
}

export default Portfolio