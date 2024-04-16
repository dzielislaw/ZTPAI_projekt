<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class UserRegistrationController extends AbstractController
{
    #[Route('/user/registration', name: 'app_user_registration', methods: ['POST'])]
    public function index(UserPasswordHasherInterface $passwordHasher, Response $registerForm): Response
    {
        $user = new User();
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            'password'
        );
        return $this->render('user_registration/index.html.twig', [
            'controller_name' => 'UserRegistrationController',
        ]);
    }
}
